import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn
} from 'typeorm';
import { User } from './User';
import { Question } from './Question';
import { Answer } from './Answer';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    body!: string;

    @ManyToOne(() => User, (user) => user.comments)
    user!: User;

    @CreateDateColumn()
    creation!: Date;

    @ManyToOne(() => Question, (question) => question.comments, { nullable: true })
    question?: Question;

    @ManyToOne(() => Answer, (answer) => answer.comments, { nullable: true })
    answer?: Answer;
}
