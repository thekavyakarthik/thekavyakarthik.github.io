import numpy as np
import fastdtw as dtw

def compute_alingment(pho1, pho2):
    pho1 = np.array(pho1)
    pho2 = np.array(pho2)
    _, path = dtw(pho1, pho2)#, keep_internals = True)
    return path

def analyze_alingment(path, pho1, pho2):
    matches = []
    mismatches = []
    #for i, j in zip(alingment[1:]):
    #print(list(itertools.chain(alingment[1:])))
    for i, j in path:
        if pho1[i] == pho2[j]:
            matches.append((pho1[i], pho2[j]))
        else:
            mismatches.append((pho1[i], pho2[j]))
    return matches, mismatches

def calculate_confidence(pho1, pho2):
    path = compute_alingment(pho1, pho2)
    matches, mismatches = analyze_alingment(path, pho1, pho2)
    max_distance = max(len(matches), len(mismatches))
    confidence = 1 - (len(mismatches) / max_distance)
    # return confidence
    return round(confidence*100, 2)