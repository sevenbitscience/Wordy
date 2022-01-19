word_file = open("wordlist.txt")

all_words = set(word_file.read().split())
good_words = []

for word in all_words:
    if len(word) == 5:
        good_words.append(word)

print(good_words)