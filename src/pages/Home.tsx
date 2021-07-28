import React, { FC, useCallback, useEffect, useState } from 'react';

import { format } from 'date-fns';

import { Icon } from '../components';
import { fireData, IAppointment } from '../services/sgbd';
import Wrapper, { Item } from '../styles/pages/Home';

const Home: FC = () => {
  const day = useState(new Date())[0];

  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const loadAppointments = useCallback(() => {
    fireData
      .list('appointments', {
        condition: [
          { field: 'day', equalTo: format(day, 'dd/MM/yyyy') },
          // { field: 'uid', equalTo: user?.uid || '' },
        ],
      })
      .then((data: IAppointment[]) =>
        setAppointments(data.sort((a, b) => (a.order || 0) - (b.order || 0)))
      );
  }, [day]);

  useEffect(() => loadAppointments(), [loadAppointments]);

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
          <button type="button">
            Novo appointment <Icon name="plus" size={12} />
          </button>
        </nav>
      </section>
      {appointments.map((app) => (
        <Item key={app.order} draggable>
          <details>
            <summary>
              {app.order}. {app.initialHour} às {app.finalHour}{' '}
              <em>({app.actualDuration} minutos)</em>
            </summary>
            <p>
              <b>Duração real:</b> {app.actualDuration} minutos
            </p>
            <p>
              <b>Duração prevista:</b> {app.expectedDuration} minutos
            </p>
            <b>Descrição:</b>
            <p>{app.message}</p>
          </details>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Home;
