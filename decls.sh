#!/bin/bash

#sets dir to directory containing this script
dir=`dirname $0`

#use $dir to access programs in this directory
#so that this script can be run from any directory.
input="$(</dev/stdin)"

echo "$input" | node $dir/descentParser.js 

