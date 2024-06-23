import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Method {
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
  @Column({ type: 'date' })
  time: Date;
}
