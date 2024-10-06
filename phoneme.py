import librosa
import numpy as np

def speech_file_to_array(wav_path):
    samples, sample_rate = librosa.load(wav_path)
    if sample_rate != 16000: # Ensures the audio is at the correct sample rate
        audio_input = librosa.resample(samples, orig_sr=sample_rate, target_sr=16000)
    return audio_input / np.abs(audio_input).max() # normalizing audio to [-1, 1]

#input to model

#parse output from model