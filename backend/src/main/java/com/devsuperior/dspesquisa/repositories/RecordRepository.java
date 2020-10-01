package com.devsuperior.dspesquisa.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.dspesquisa.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

	@Query("select obj from Record obj WHERE "
			+ "(coalesce(:minDate, null) is NULL OR obj.moment >= :minDate) AND "
			+ "(coalesce(:maxDate, null) is NULL OR obj.moment <= :maxDate)")
	Page<Record> findByMoments(Instant minDate, Instant maxDate, Pageable pageable);

}
