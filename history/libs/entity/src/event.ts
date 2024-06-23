import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryColumn()
  id: number;
  @Column()
  restMethod: string;
  @Column()
  userId: number;
  @Column({ type: 'date' })
  time: Date;
}
