package com.example.AutoSuggestion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.AutoSuggestion.entity.Wordlist;
import com.example.AutoSuggestion.service.SuggestionServ;


@CrossOrigin
@RestController
@RequestMapping("/suggest")
public class SuggestionController {
	@Autowired
	SuggestionServ Sservice;
	
	@GetMapping("/getword/{word}")
	public List<Wordlist> deletedb(@PathVariable String word) {
		return Sservice.get(word);
	}
	
	@GetMapping("/select")
	public List<Wordlist> getdb() {
		return Sservice.getdb();
	}

}
