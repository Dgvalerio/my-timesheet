import React, { FC, useState } from 'react';

import Wrapper, { Item } from '../styles/pages/Home';

interface Appointment {
  order: number;
  initialTime: string;
  finalTime: string;
  duration: string;
  preDuration: string;
  description: string;
}

const Home: FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      order: 1,
      initialTime: '7:30',
      finalTime: '8:20',
      duration: '50',
      preDuration: '32',
      description:
        'Assistindo vídeo-aulas da seção 28: &ldquo;Optional: React Hooks Introduction & Summary&rdquo; do curso &ldquo;React - The Complete Guide&rdquo;, na Udemy.',
    },
    {
      order: 2,
      initialTime: '7:30',
      finalTime: '8:20',
      duration: '50',
      preDuration: '32',
      description:
        'Assistindo vídeo-aulas da seção 28: &ldquo;Optional: React Hooks Introduction & Summary&rdquo; do curso &ldquo;React - The Complete Guide&rdquo;, na Udemy.',
    },
  ]);

  return (
    <Wrapper>
      <h1>Appointments</h1>
      <p>
        O horário é das 07:30 às 13:30, mas como o horário final de um
        apontamento não pode ser o horário inicial de nenhum outro, tudo deve
        ser um pouco empurrado, conforme o necessário.
      </p>
      <section>
        <nav>
          <button type="button">Novo appointment</button>
        </nav>
      </section>
      {appointments.map((app) => (
        <Item key={app.order} draggable>
          <details>
            <summary>
              {app.order}. {app.initialTime} às {app.finalTime}{' '}
              <em>({app.duration} minutos)</em>
            </summary>
            <p>
              <b>Duração real:</b> {app.duration} minutos
            </p>
            <p>
              <b>Duração prevista:</b> {app.preDuration} minutos
            </p>
            <b>Descrição:</b>
            <p>{app.description}</p>
          </details>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Home;
