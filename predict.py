import sys
import os
import joblib

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, 'model', 'fake_news_model.pkl')
vectorizer_path = os.path.join(BASE_DIR, 'model', 'tfidf_vectorizer.pkl')

model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)

input_text = sys.argv[1]

input_vec = vectorizer.transform([input_text])
prediction = model.predict(input_vec)[0]

print('real' if prediction == 1 else 'fake')
