import React, { FC, useState } from 'react';

import Icon from '../../components/Icon';
import { Item } from '../../styles/pages/Home';
import { IAppointment } from '../../types/interfaces';

const AppointmentItem: FC<{ app: IAppointment }> = ({ app }) => {
  const [open, setOpen] = useState(false);

  return (
    <Item draggable open={open}>
      <details open={open} onToggle={() => setOpen((prev) => !prev)}>
        <summary>
          {app.initialHour} às {app.finalHour}{' '}
          <em>({app.actualDuration} minutos)</em>
          <Icon name={open ? 'chevron up' : 'chevron down'} />
        </summary>
        <div>
          <div>
            <small>Duração real</small>
            <p>{app.actualDuration} minutos</p>
          </div>
          <div>
            <small>Duração prevista</small>
            <p>{app.expectedDuration} minutos</p>
          </div>
        </div>
        <div>
          <small>Descrição</small>
          <p>{app.message}</p>
        </div>
      </details>
    </Item>
  );
};

export default AppointmentItem;
