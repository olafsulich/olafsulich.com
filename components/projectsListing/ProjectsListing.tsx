import { memo } from 'react';
import styles from './projectsListing.module.scss';
import ProjectThumbnail from './projectThumbnail/ProjectThumbnail';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Project = {
  title: string;
  excerpt: string;
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
};

type ProjectsListingProps = {
  projects: Project[];
};

const ProjectsListing = memo(({ projects }: ProjectsListingProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectsWrapper}>
        {projects.map(({ title, excerpt, path, image, variant, technologies }, i) => (
          <ProjectThumbnail
            key={title}
            index={i + 1}
            title={title}
            excerpt={excerpt}
            path={path}
            image={image}
            variant={variant}
            technologies={technologies}
          />
        ))}
      </div>
    </div>
  );
});

export default ProjectsListing;
