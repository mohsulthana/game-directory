import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
    const { data: genres, error, isLoading } = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={3}>
                Genres
            </Heading>
            <List>
                {genres?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY={"5px"}>
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                objectFit={"cover"}
                                boxSize={"32px"}
                                borderRadius={8}
                            />
                            <Button
                                fontSize={"lg"}
                                variant={"link"}
                                whiteSpace={"normal"}
                                textAlign={"left"}
                                onClick={() => setSelectedGenreId(genre.id)}
                                fontWeight={
                                    genre.id === selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
