#!/bin/bash

dir=$1
files=$2
IFS=',' read -r -a files_array <<< "$files"

if [ -z "$dir" ]; then
  echo "Usage: $0 <directory_path> <files>"
  exit 1
fi

if [ ! -d "$dir" ]; then
  echo "$dir is not a valid directory"
  exit 1
fi

if [ -z "$files" ]; then
  echo "filenames is empty. Please provide valid filenames."
  exit 1
fi

for dir1 in $(find "$dir" -maxdepth 1 -mindepth 1 -type d); do

  use_yarn=false

  for item in $(find "$dir1" -maxdepth 1 -mindepth 1 -type f -o -type d); do
    item_name=$(basename "$item")

    for filename in "${files_array[@]}"; do
      if [ "$item_name" == "$filename" ]; then
        printf "COPY ./${dir1}/${item_name} /${dir1}/${item_name}\n"
        if [[ "$item_name" == *"yarn"* ]]; then
          use_yarn=true
        fi
      fi
    done
  done

  if [ "$use_yarn" = true ]; then
    printf "RUN cd /${dir1} && yarn install\n"
  else
    printf "RUN cd /${dir1} && npm install\n"
  fi

  printf "\n"
done

