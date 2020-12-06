package io.github.cezareduardo.clientes.model.repository;

import io.github.cezareduardo.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
