import { IsNotEmpty } from 'class-validator';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn
} from 'typeorm';
import { User } from './User';
import { Answer } from './Answer';
import { Comment } from './Comment';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsNotEmpty({ message: 'Title is required' })
    title!: string;

    @Column('text')
    @IsNotEmpty({ message: 'Body is required' })
    body!: string;

    @Column({ default: 0 })
    score!: number;

    @CreateDateColumn()
    creation!: Date;

    @ManyToOne(() => User, (user) => user.questions)
    user!: User;

    @OneToMany(() => Answer, (answer) => answer.question)
    answers!: Answer[];

    @OneToMany(() => Comment, (comment) => comment.question)
    comments!: Comment[];
}
