import { useState } from "react"

import { Modal, Group, Button, TextInput, Textarea } from "@mantine/core"


function AddTodo() {
    const [open, setOpen] = useState(false);

    function createTodo(){

    }
    

    return (
        <>
         <Modal opened={open} onClose={() => setOpen(false)} title="Create Todo">
                <form onSubmit={form.onSubmit(createTodo)}>
                <TextInput 
                    required
                    mb={12}
                    label="Todo"
                    placeholder="what do you want to do?"
                    {...form.getInputProps("title")}
                />
                <Textarea />

                <Button type="submit">Create Todo</Button>
                </form>
               
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
