#!/bin/bash
# This script displays the date and who's logged on

# The option -n makes no new line after echo
# -n 的命令让echo这一行结尾不会换行
echo -n "The time and date are: "
date
echo "Let's see who's logged into the system:"
who
testing=$(date)
echo "The date and time are: " $testing
today=$(date +%y%m%d)
ls / >> log.$today

echo `ls`