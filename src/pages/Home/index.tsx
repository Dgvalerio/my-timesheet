import React, { FC, useCallback, useEffect, useState } from 'react';

import { format } from 'date-fns';

import Icon from '../../components/Icon';
import fireData from '../../services/sgbd';
import Wrapper from '../../styles/pages/Home';
import { IAppointment } from '../../types/interfaces';
import AppointmentItem from './AppointmentItem';

const Index: FC = () => {
  const day = useState(new Date())[0];

  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const loadAppointments = useCallback(() => {
    fireData
      .list('appointments', {
        condition: [
          { field: 'day', equalTo: '10/08/2021' || format(day, 'dd/MM/yyyy') },
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
      <section>
        <nav>
          <h1>Appointments</h1>
          <button type="button">
            Novo appointment <Icon name="plus" size={12} />
          </button>
        </nav>
      </section>
      {appointments.map((app) => (
        <AppointmentItem app={app} key={app.id} />
      ))}
    </Wrapper>
  );
};

export default Index;
