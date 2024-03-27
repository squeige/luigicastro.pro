#!/bin/bash

# Build Docker image
docker build -t squeige/luigicastro.pro:latest -t squeige/luigicastro.pro:0.3 .


# Push Docker image to Docker Hub
docker push squeige/luigicastro.pro:latest
docker push squeige/luigicastro.pro:0.3
