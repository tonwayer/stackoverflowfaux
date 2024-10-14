import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './Question';
import { Answer } from './Answer';
import { Comment } from './Comment';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsNotEmpty({ message: 'User name is required' })
    name!: string;

    @OneToMany(() => Question, (question) => question.user)
    questions!: Question[];

    @OneToMany(() => Answer, (answer) => answer.user)
    answers!: Answer[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments!: Comment[];
}
