import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MegaMenuContainer = styled(motion.div)`
  position: absolute;
  top: 50px;
  left: -150%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
  padding: 15px;
  min-width: 300px;
  max-width: 600px;
  z-index: 200;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 8px;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
`

const MegaMenuItem = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: #007bff;
    color: white;
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    background: none;
    color: #0094d9;
    padding: 12px;
    font-size: 16px;
    &:hover {
      background: none;
      color: #3d9948;
    }
  }
`

const menuItems = [
  { to: "/servicos/febre-amarela", label: "🦟 Vacina Febre Amarela" },
  { to: "/servicos/tifoide", label: "🍗 Vacina Tifoide" },
  { to: "/servicos/arexvy", label: "💨 Vacina Arexvy (Vírus Respiratório)" },
  { to: "/servicos/tetravalente", label: "💉 Vacina Tetravalente" },
  { to: "/servicos/triplicebacteriana", label: "🦠 Vacina Tríplice Bacteriana Acelular" },
  { to: "/servicos/meningococica", label: "🧠 Vacina Meningocócica" },
  { to: "/servicos/gripe", label: "🤧 Vacina Influenza (Gripe)" },
  { to: "/servicos/meningococicab", label: "🧠 Vacina Meningocócica B" },
  { to: "/servicos/triplice", label: "🦠 Vacina Tríplice Viral" },
  { to: "/servicos/varicela", label: "🐔 Vacina Varicela (Catapora)" },
  { to: "/servicos/pneumococica", label: "💨 Vacina Pneumocócica 23" },
  { to: "/servicos/pentavalente", label: "💉 Vacina Pentavalente" },
  { to: "/servicos/rotavirus", label: "🍼 Vacina Rotavírus" },
  { to: "/servicos/tetraviral", label: "💉 Vacina Tetra Viral" },
  { to: "/servicos/hpv", label: "🧬 Vacina HPV" },
  { to: "/servicos/hexavalente", label: "💉 Vacina Hexavalente" },
  { to: "/servicos/herpes", label: "🔥 Vacina Herpes Zóster" },
  { to: "/servicos/hepatiteab", label: "🩸 Vacina Hepatite A e B" },
  { to: "/servicos/hepatitea", label: "🩸 Vacina Hepatite A" },
  { to: "/servicos/hepatiteb", label: "🩸 Vacina Hepatite B" },
  { to: "/servicos/haemophilus", label: "🦠 Vacina Haemophilus" },
  { to: "/servicos/efluelda", label: "💉 Vacina Efluelda" },
  { to: "/servicos/dengue", label: "🦟 Vacina Dengue" },
  { to: "/servicos/abrysvo", label: "💨 Vacina Abrysvo" },
  { to: "/servicos/tripliceinfantil", label: "👶 Vacina Tríplice Bacteriana Acelular Infantil" },
]

function MegaMenu() {
  return (
    <MegaMenuContainer
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {menuItems.map((item, index) => (
        <MegaMenuItem key={index} to={item.to}>{item.label}</MegaMenuItem>
      ))}
    </MegaMenuContainer>
  )
}

export default MegaMenu
