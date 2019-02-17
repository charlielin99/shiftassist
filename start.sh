#!/bin/bash
WORKDIR=$(pwd)
cd $WORKDIR/frontend && npm start &
cd $WORKDIR/backend && npm start &
cd $WORKDIR/watson-api && npm start &