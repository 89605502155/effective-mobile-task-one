import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('human')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  surname: string;
  @Column({ nullable: false })
  age: number;
}
