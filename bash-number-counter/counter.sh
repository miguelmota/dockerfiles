#!/bin/bash

COUNTER=0

while true; do
  sleep 1
  echo "$COUNTER"
  COUNTER=$((COUNTER+1))
done
