#!/bin/bash

echo ""
echo "------------------------------"
echo "Installing CLI's..."
echo "------------------------------"
echo ""

npm install -g grunt-cli bower

echo ""
echo "------------------------------"
echo "Installing Packages..."
echo "------------------------------"
echo ""

npm install && bower install

echo ""
echo "G2G (⌐■_■)"
echo ""