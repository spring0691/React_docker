#!/bin/bash

dir=$1
spaces=$2

if [ -z "$dir" ]; then
  echo "Usage: $0 <directory_path> <spaces>"
  exit 1
fi

if ! [[ "$spaces" =~ ^[0-9]+$ ]]; then
  echo "Error: The second argument must be a number."
  exit 1
fi

if [ ! -d "$dir" ]; then
  echo "$dir is not a valid directory"
  exit 1
fi

for dir1 in $(find "$dir" -maxdepth 1 -mindepth 1 -type d); do

  for item in $(find "$dir1" -maxdepth 1 -mindepth 1 -type f -o -type d); do
    item_name=$(basename "$item")
    printf "%${spaces}s- ./${dir1}/${item_name}:/${dir1}/${item_name}\n"
  done
    printf "\n"
done
