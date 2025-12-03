import { Users, ThumbsUp, ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { motion } from "framer-motion";
import { Course } from "../lib/data";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article
      className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Imagen del curso - altura fija */}
      <a href={`/curso/${course.id}`} className="block relative aspect-video overflow-hidden flex-shrink-0">
        {course.badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">{course.badge}</Badge>
        )}
        <motion.img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </a>

      {/* Contenido - flex para distribuir espacio */}
      <div className="p-4 flex flex-col flex-1">
        {/* Información del curso - ocupa el espacio disponible */}
        <div className="flex-1 space-y-3">
          <a href={`/curso/${course.id}`}>
            <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors min-h-[3rem]">
              {course.title}
            </h3>
          </a>
          <p className="text-sm text-muted-foreground line-clamp-1">
            Un curso de {course.instructor}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Estadísticas - altura fija */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground py-3">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" />
            <span>
              {course.rating}% ({(course.reviews / 1000).toFixed(1)}K)
            </span>
          </div>
        </div>

        {/* Botón - siempre al final */}
        <a href={`/curso/${course.id}`} className="block mt-auto">
          <Button
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors bg-transparent"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ver Más
          </Button>
        </a>
      </div>
    </motion.article>
  );
}