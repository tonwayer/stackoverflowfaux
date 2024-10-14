// src/entity/Answer.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn
} from 'typeorm';
import { User } from './User';
import { Question } from './Question';
import { Comment } from './Comment';

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    body!: string;

    @Column({ default: 0 })
    score!: number;

    @CreateDateColumn()
    creation!: Date;

    @ManyToOne(() => Question, (question) => question.answers)
    question!: Question;

    @ManyToOne(() => User, (user) => user.answers)
    user!: User;

    @OneToMany(() => Comment, (comment) => comment.answer)
    comments!: Comment[];
}
