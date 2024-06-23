import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryColumn()
  id: number;
  @Column()
  userId: number;
  @Column({ type: 'date', default: () => Date.now() })
  time: Date;
}
