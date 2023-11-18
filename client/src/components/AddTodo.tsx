import { useState } from "react"

import { Modal, Group, Button } from "@mantine/core"

function AddTodo() {
    const [open, setOpen] = useState(false);

    

    return (
        <>
         <Modal opened={open} onClose={() => setOpen(false)} title="Create Todo">
                text
            </Modal>

            <Group>
                <Button fullWidth mb={12} onClick={() => setOpen(true)}>
                    ADD TODO
                </Button>
            </Group>
        </>
    )
}

export default AddTodo;
