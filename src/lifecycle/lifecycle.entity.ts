import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lifecycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  eventType: string;

  @Column()
  timestamp: Date;
}
