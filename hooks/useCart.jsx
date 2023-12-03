import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const useCart = create(
    persist((set, get) => ({
        items: [],
        addItem: data => {
            const currentItems = get().items
            const existingItem = currentItems.find(item => item.id === data.id)
            if (existingItem) {
                return toast("Item already in cart")
            }
            set({ items: [...get().items, data] })
            toast.success("item added to cart")
        },
        removeItem: id => {
            set({ items: [...get().items.filters(item => item.id === id)] })
            toast.success("Item Removed From the Cart")
        },
        removeAll: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;