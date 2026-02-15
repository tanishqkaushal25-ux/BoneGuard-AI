# BoneGuard-AI
## Bone-AI
Bone-AI is a machine learning project designed for accurate bone tumor detection using a combination of real-world medical data and GAN-generated synthetic data. The system assists medical professionals by improving diagnosis accuracy and handling the complexity of bone tumor patterns that are difficult for the human brain to memorize.

## Problem

Scarcity of labeled bone tumor data

Large number of bone tumor patterns, making manual analysis challenging

## Proposed Solution

Machine learning model trained on:

Real-world bone scan data

GAN-generated synthetic data for bone density and structure

Combining real-world and synthetic data improves model accuracy:

Accuracy of Real-World Model < Accuracy of Real-World + GAN Data Model

## Key Features

Fast and accurate bone tumor detection

Handles large variety of tumor patterns

Utilizes synthetic data augmentation to improve performance

User-friendly interface for easy adoption

## Technical Approach

Framework: PyTorch

Data: Real scans + GAN synthetic images

Model Evaluation:

F1 Score, Confusion Matrix, Accuracy & Loss graphs per epoch

Training Insights:

Best validation accuracy:

Epoch 82 → 97.73%

Epoch 96 → 97.62%

Model peaked around epochs 80–96; slight fluctuation at epoch 100

## Final Evaluation Summary

Accuracy: 96.71%

Precision: 96.71%

Recall: 95.98%

F1 Score: 96.34%

False Positives: 13

False Negatives: 16

##  Website Setup

To run the Bone-AI website, execute the following commands in the terminal:

### Start the backend API:

python -m uvicorn backend.main:app --reload


### Start the frontend:

npm run dev


The website should now be running locally and accessible in your browser.

## ⚠️Notes⚠️

Ensure you have Python, Node.js, and necessary dependencies installed

GPU is recommended for faster model inference
