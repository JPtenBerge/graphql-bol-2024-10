import DataLoader from 'dataloader';


export class DirectorDataLoader {
    directorRepo;
    constructor(directorRepo) {
        this.directorRepo = directorRepo;
    }

    loader = new DataLoader(async (ids) => {
        console.log('[director-dataloader] resolving directors with ids:', ids);
        return this.directorRepo.getAllByIds(ids);
    });

    async batch(id) {
        return await this.loader.load(id);
    }

}