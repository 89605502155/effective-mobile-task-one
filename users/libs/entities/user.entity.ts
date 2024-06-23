import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('human')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  age: number;
}
