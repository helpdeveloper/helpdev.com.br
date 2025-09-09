SHELL := /bin/bash

# Config
PORT ?= 8000
HOST ?= 127.0.0.1

.PHONY: help install dev build serve build-serve

## help: Show available targets
help:
	@grep -E '^##' Makefile | sed -E 's/## //' | column -t -s ':'

## install: Install project dependencies (npm ci fallback to npm install)
install:
	npm ci || npm install

## dev: Run Next.js in development mode at http://localhost:3000
dev:
	npm run dev

## build: Build production (static export expected into ./out)
build:
	npm run build

## serve: Serve the static ./out folder on $(HOST):$(PORT)
serve:
	npx http-server ./out -a $(HOST) -p $(PORT) -c-1

## build-serve: Build then serve the static ./out folder
build-serve:
	npm run build && npx http-server ./out -a $(HOST) -p $(PORT) -c-1

