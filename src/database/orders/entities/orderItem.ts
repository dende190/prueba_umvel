import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne
} from 'typeorm';
import { Order } from './order';
import { Item } from './item';

@Entity()
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @ManyToOne(type => Order, order => order.id) @JoinColumn()
  order!: Order
  @ManyToOne(type => Item, item => item.id) @JoinColumn()
  item!: Item
}
