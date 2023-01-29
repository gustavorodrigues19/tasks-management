#!/bin/sh

DIR=/node_modules
if [ -d "$DIR" ];
then
    npm run dev
else
	npm install && npm run dev
fi