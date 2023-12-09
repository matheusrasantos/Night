package br.senac.tads.dswa.exemplos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import jakarta.persistence.Entity;

@Entity
@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {

}