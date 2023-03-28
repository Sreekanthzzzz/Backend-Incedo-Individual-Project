package com.example.AutoSuggestion.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Wordlist {
	@Id
	public String words;
	public String frequency;
	public String hits;
	public String getWords() {
		return words;
	}
	public void setWords(String words) {
		this.words = words;
	}
	public String getFrequency() {
		return frequency;
	}
	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}
	public String getHits() {
		return hits;
	}
	public void setHits(String hits) {
		this.hits = hits;
	}
	public Wordlist(String words, String frequency, String hits) {
		super();
		this.words = words;
		this.frequency = frequency;
		this.hits = hits;
	}
	@Override
	public String toString() {
		return "Wordlist [words=" + words + ", frequency=" + frequency + ", hits=" + hits + "]";
	}
	public Wordlist() {
		super();
	}

	
	
}
