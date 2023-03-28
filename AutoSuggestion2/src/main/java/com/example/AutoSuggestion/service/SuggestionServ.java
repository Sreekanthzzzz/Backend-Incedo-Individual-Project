package com.example.AutoSuggestion.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.AutoSuggestion.entity.Wordlist;
import com.example.AutoSuggestion.repository.SuggestionRepo;

@Service
public class SuggestionServ {
	
	@Autowired
	SuggestionRepo Srepository;

	public List<Wordlist> getdb() {
		
		return Srepository.findAll();
	}

	public List<Wordlist> get(String word) {
		List<Wordlist> wordlist = Srepository.get(word); // get the list of objects from the database

				// sort the list by frequency in descending order
				Collections.sort(wordlist, new Comparator<Wordlist>() {
				    @Override
				    public int compare(Wordlist w1, Wordlist w2) {
				        int freq1 = Integer.parseInt(w1.getFrequency());
				        int freq2 = Integer.parseInt(w2.getFrequency());
				        return Integer.compare(freq2, freq1);
				    }
				});
		
		return  wordlist;
	}

}
