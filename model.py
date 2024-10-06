from transformers import AutoModelForCTC, Wav2Vec2Processor

model = AutoModelForCTC.from_pretrained("kavsss/wav2vec2-tune-timit-asr-for-phoneme")
processor = Wav2Vec2Processor.from_pretrained("kavsss/wav2vec2-tune-timit-asr-for-phoneme")

import torch
