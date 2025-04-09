import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateBookDto & { userId: number }) {
        return this.prisma.book.create({
            data: {
                title: data.title,
                author: data.author,
                category: data.category,
                price: data.price,
                rating: data.rating,
                publishedDate: new Date(data.publishedDate),
                user: { connect: { id: data.userId } },
            },
        });
    }


    findAll(query: any) {
        const { author, category, rating, title } = query;
      
        return this.prisma.book.findMany({
          where: {
            author: author ? { contains: author, mode: 'insensitive' } : undefined,
            category: category ? { contains: category, mode: 'insensitive' } : undefined,
            rating: rating ? { gte: Number(rating) } : undefined,
            title: title ? { contains: title, mode: 'insensitive' } : undefined,
          },
        });
      }

    findOne(id: string) {
        return this.prisma.book.findUnique({ where: { id: Number(id) }, });
    }

    update(id: string, data: UpdateBookDto) {
        return this.prisma.book.update({
            where: { id: Number(id) },
            data,
        });
    }

    remove(id: string) {
        return this.prisma.book.delete({ where: { id: Number(id) }, });
    }
}
