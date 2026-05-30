"use client"

import { useState } from "react";

type Props = {
    onAdicionar: (descricao: string) => void;
};

export default function NovaTarefa({ onAdicionar }: Props) {
    const [texto, setTexto] = useState("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!texto.trim()) return;

        onAdicionar(texto);

        setTexto("");

    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                onChange={e => setTexto(e.target.value)}
                value={texto}
            />
            <button type="submit">Adcionar</button>
        </form>
    )
}