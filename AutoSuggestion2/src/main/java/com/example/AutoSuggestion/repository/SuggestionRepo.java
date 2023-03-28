package com.example.AutoSuggestion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.AutoSuggestion.entity.Wordlist;



@Repository
public interface SuggestionRepo extends JpaRepository<Wordlist,Long>{
	
	 @Query("SELECT w FROM Wordlist w WHERE w.words LIKE :word%")
	List<Wordlist> get(@Param("word") String word);

}
