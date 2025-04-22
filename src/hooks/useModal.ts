import { useState, useCallback } from "react";
type ModalId = string | null;
export default function useModal() {
  const [openModalId, setOpenModalId] = useState<ModalId>(null);
  const openModal = useCallback((id: string) => {
    setOpenModalId(id);
  }, []);
  const closeModal = useCallback(() => {
    setOpenModalId(null);
  }, []);
  const isOpen = useCallback((id: string) => openModalId === id, [openModalId]);
  return { openModal, closeModal, isOpen };
}
