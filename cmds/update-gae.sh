#!/usr/bin/env bash

NAME=$(node -p -e "require('./package.json').name")
npm run-script build && gcloud app deploy --quiet --bucket=gs//${NAME}