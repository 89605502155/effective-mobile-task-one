import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Method {
  POST = 'POST',
  PUT = 'PUT',
}
@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    type: 'enum',
    enum: Method,
    default: Method.POST,
  })
  restMethod: Method;
  @Column()
  userId: number;
  @CreateDateColumn({ type: 'timestamp' })
  time: Date;
  @Column({ type: 'bool', default: true })
  status: boolean;
}
