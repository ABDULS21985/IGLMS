import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Policy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('text')
  rules: string;
}
