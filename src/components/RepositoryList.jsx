import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react";
import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])
// TODO useEffect - cuidado para não deixar o  useEffect sem segundo parametro

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository, index) => {
          return <RepositoryItem key={index} repository={repository}/>
        })}
      </ul>
    </section>
  )
}