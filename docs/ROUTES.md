# Routes à ajouter dans App.tsx

Pour activer toutes les fonctionnalités SEO, ajoutez ces routes dans votre fichier `App.tsx` :

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages existantes
import HomePage from './pages/HomePage';
import ExpertisesPage from './pages/ExpertisesPage';
import ProjectsPage from './pages/ProjectsPage';
import FAQPage from './pages/FAQPage';

// Nouvelles pages SEO
import ServicePage from './pages/ServicePage';
import CommunePage from './pages/CommunePage';
import LegalPage from './pages/LegalPage';
import GuaranteesPage from './pages/GuaranteesPage';
import GoogleBusinessPage from './pages/GoogleBusinessPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages principales */}
        <Route path="/" element={<HomePage />} />
        <Route path="/expertises" element={<ExpertisesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        
        {/* Pages services par ville */}
        <Route path="/renovation-bruxelles" element={<ServicePage service="renovation" city="Bruxelles" />} />
        <Route path="/electricite-bruxelles" element={<ServicePage service="electricite" city="Bruxelles" />} />
        <Route path="/plomberie-bruxelles" element={<ServicePage service="plomberie" city="Bruxelles" />} />
        <Route path="/chauffage-bruxelles" element={<ServicePage service="chauffage" city="Bruxelles" />} />
        <Route path="/climatisation-bruxelles" element={<ServicePage service="climatisation" city="Bruxelles" />} />
        <Route path="/menuiserie-bruxelles" element={<ServicePage service="menuiserie" city="Bruxelles" />} />
        <Route path="/peinture-bruxelles" element={<ServicePage service="peinture" city="Bruxelles" />} />
        <Route path="/carrelage-bruxelles" element={<ServicePage service="carrelage" city="Bruxelles" />} />
        
        {/* Pages communales */}
        <Route path="/renovation-schaerbeek" element={<CommunePage />} />
        <Route path="/renovation-evere" element={<CommunePage />} />
        <Route path="/renovation-ixelles" element={<CommunePage />} />
        <Route path="/renovation-uccle" element={<CommunePage />} />
        <Route path="/renovation-etterbeek" element={<CommunePage />} />
        <Route path="/renovation-anderlecht" element={<CommunePage />} />
        <Route path="/renovation-woluwe-saint-lambert" element={<CommunePage />} />
        <Route path="/renovation-woluwe-saint-pierre" element={<CommunePage />} />
        
        {/* Pages légales et crédibilité */}
        <Route path="/mentions-legales" element={<LegalPage />} />
        <Route path="/garanties" element={<GuaranteesPage />} />
        <Route path="/google-business" element={<GoogleBusinessPage />} />
        
        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        
        {/* 404 */}
        <Route path="*" element={<div>Page non trouvée</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Services × Communes (optionnel - pour SEO ultra-local)

Si vous voulez créer des pages pour chaque service dans chaque commune :

```tsx
// Exemples pour Schaerbeek
<Route path="/renovation-schaerbeek" element={<ServicePage service="renovation" city="Schaerbeek" />} />
<Route path="/electricite-schaerbeek" element={<ServicePage service="electricite" city="Schaerbeek" />} />
<Route path="/plomberie-schaerbeek" element={<ServicePage service="plomberie" city="Schaerbeek" />} />

// Répéter pour chaque commune...
```

**⚠️ Important** : Créer 8 services × 19 communes = 152 pages nécessite du contenu unique par page pour éviter le duplicate content. Commencez par les 3 services principaux × 5 communes prioritaires.

## Ordre de priorité d'implémentation

1. **Phase 1 - Essentiel** (semaine 1)
   - Pages services Bruxelles (8 routes)
   - Pages légales (2 routes)
   - Blog index + structure (2 routes)

2. **Phase 2 - Local** (semaine 2)
   - Pages communales prioritaires (5-8 routes)
   - Premier article de blog
   - Google Business page

3. **Phase 3 - Expansion** (semaine 3-4)
   - Toutes les communes (19 routes)
   - 3-5 articles de blog
   - Services × communes prioritaires

4. **Phase 4 - Optimisation** (continu)
   - Nouveaux articles blog (1/semaine)
   - Mise à jour contenu existant
   - Ajout testimonials et case studies
